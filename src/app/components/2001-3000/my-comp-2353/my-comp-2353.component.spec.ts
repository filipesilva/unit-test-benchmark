import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2353Component } from './my-comp-2353.component';

describe('MyComp2353Component', () => {
  let component: MyComp2353Component;
  let fixture: ComponentFixture<MyComp2353Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2353Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
