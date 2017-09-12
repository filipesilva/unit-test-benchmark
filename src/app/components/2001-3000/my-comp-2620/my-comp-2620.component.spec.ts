import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2620Component } from './my-comp-2620.component';

describe('MyComp2620Component', () => {
  let component: MyComp2620Component;
  let fixture: ComponentFixture<MyComp2620Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2620Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
