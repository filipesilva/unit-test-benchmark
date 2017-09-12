import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp460Component } from './my-comp-460.component';

describe('MyComp460Component', () => {
  let component: MyComp460Component;
  let fixture: ComponentFixture<MyComp460Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp460Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp460Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
