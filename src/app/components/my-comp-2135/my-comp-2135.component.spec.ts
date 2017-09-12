import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2135Component } from './my-comp-2135.component';

describe('MyComp2135Component', () => {
  let component: MyComp2135Component;
  let fixture: ComponentFixture<MyComp2135Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2135Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
