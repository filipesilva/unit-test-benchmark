import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5710Component } from './my-comp-5710.component';

describe('MyComp5710Component', () => {
  let component: MyComp5710Component;
  let fixture: ComponentFixture<MyComp5710Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5710Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
