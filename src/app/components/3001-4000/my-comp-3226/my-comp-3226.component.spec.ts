import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3226Component } from './my-comp-3226.component';

describe('MyComp3226Component', () => {
  let component: MyComp3226Component;
  let fixture: ComponentFixture<MyComp3226Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3226Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
