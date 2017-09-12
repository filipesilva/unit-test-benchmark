import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2363Component } from './my-comp-2363.component';

describe('MyComp2363Component', () => {
  let component: MyComp2363Component;
  let fixture: ComponentFixture<MyComp2363Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2363Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
