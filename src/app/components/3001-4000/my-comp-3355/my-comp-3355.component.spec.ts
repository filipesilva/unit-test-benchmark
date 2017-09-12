import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3355Component } from './my-comp-3355.component';

describe('MyComp3355Component', () => {
  let component: MyComp3355Component;
  let fixture: ComponentFixture<MyComp3355Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3355Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
