import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp862Component } from './my-comp-862.component';

describe('MyComp862Component', () => {
  let component: MyComp862Component;
  let fixture: ComponentFixture<MyComp862Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp862Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
