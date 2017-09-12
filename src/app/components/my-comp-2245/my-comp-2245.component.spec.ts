import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2245Component } from './my-comp-2245.component';

describe('MyComp2245Component', () => {
  let component: MyComp2245Component;
  let fixture: ComponentFixture<MyComp2245Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2245Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
