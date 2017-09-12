import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2160Component } from './my-comp-2160.component';

describe('MyComp2160Component', () => {
  let component: MyComp2160Component;
  let fixture: ComponentFixture<MyComp2160Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2160Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
