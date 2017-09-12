import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp789Component } from './my-comp-789.component';

describe('MyComp789Component', () => {
  let component: MyComp789Component;
  let fixture: ComponentFixture<MyComp789Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp789Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
