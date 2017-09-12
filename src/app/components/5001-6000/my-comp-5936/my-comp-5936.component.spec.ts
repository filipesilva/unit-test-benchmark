import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5936Component } from './my-comp-5936.component';

describe('MyComp5936Component', () => {
  let component: MyComp5936Component;
  let fixture: ComponentFixture<MyComp5936Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5936Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
