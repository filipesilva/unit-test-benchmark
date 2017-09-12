import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5406Component } from './my-comp-5406.component';

describe('MyComp5406Component', () => {
  let component: MyComp5406Component;
  let fixture: ComponentFixture<MyComp5406Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5406Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
