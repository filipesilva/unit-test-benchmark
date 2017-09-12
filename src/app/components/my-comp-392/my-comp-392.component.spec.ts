import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp392Component } from './my-comp-392.component';

describe('MyComp392Component', () => {
  let component: MyComp392Component;
  let fixture: ComponentFixture<MyComp392Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp392Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
