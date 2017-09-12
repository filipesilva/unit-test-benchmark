import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3977Component } from './my-comp-3977.component';

describe('MyComp3977Component', () => {
  let component: MyComp3977Component;
  let fixture: ComponentFixture<MyComp3977Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3977Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3977Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
