import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5637Component } from './my-comp-5637.component';

describe('MyComp5637Component', () => {
  let component: MyComp5637Component;
  let fixture: ComponentFixture<MyComp5637Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5637Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
