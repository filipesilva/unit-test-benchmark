import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7851Component } from './my-comp-7851.component';

describe('MyComp7851Component', () => {
  let component: MyComp7851Component;
  let fixture: ComponentFixture<MyComp7851Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7851Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7851Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
