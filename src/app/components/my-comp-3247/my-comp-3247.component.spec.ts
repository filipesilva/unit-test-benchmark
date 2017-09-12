import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3247Component } from './my-comp-3247.component';

describe('MyComp3247Component', () => {
  let component: MyComp3247Component;
  let fixture: ComponentFixture<MyComp3247Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3247Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
