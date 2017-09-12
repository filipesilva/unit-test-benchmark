import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp893Component } from './my-comp-893.component';

describe('MyComp893Component', () => {
  let component: MyComp893Component;
  let fixture: ComponentFixture<MyComp893Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp893Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
