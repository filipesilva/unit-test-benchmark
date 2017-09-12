import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2392Component } from './my-comp-2392.component';

describe('MyComp2392Component', () => {
  let component: MyComp2392Component;
  let fixture: ComponentFixture<MyComp2392Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2392Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
