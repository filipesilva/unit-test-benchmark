import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2591Component } from './my-comp-2591.component';

describe('MyComp2591Component', () => {
  let component: MyComp2591Component;
  let fixture: ComponentFixture<MyComp2591Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2591Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
