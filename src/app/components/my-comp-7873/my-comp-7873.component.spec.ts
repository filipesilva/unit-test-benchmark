import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7873Component } from './my-comp-7873.component';

describe('MyComp7873Component', () => {
  let component: MyComp7873Component;
  let fixture: ComponentFixture<MyComp7873Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7873Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7873Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
