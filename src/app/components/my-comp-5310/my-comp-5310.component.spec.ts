import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5310Component } from './my-comp-5310.component';

describe('MyComp5310Component', () => {
  let component: MyComp5310Component;
  let fixture: ComponentFixture<MyComp5310Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5310Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
