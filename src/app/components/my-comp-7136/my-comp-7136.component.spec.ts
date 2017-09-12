import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7136Component } from './my-comp-7136.component';

describe('MyComp7136Component', () => {
  let component: MyComp7136Component;
  let fixture: ComponentFixture<MyComp7136Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7136Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
