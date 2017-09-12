import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp820Component } from './my-comp-820.component';

describe('MyComp820Component', () => {
  let component: MyComp820Component;
  let fixture: ComponentFixture<MyComp820Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp820Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp820Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
