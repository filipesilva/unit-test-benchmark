import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp458Component } from './my-comp-458.component';

describe('MyComp458Component', () => {
  let component: MyComp458Component;
  let fixture: ComponentFixture<MyComp458Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp458Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
