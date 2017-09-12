import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2622Component } from './my-comp-2622.component';

describe('MyComp2622Component', () => {
  let component: MyComp2622Component;
  let fixture: ComponentFixture<MyComp2622Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2622Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
