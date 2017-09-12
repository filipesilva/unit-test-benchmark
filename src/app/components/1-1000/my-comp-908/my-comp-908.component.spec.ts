import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp908Component } from './my-comp-908.component';

describe('MyComp908Component', () => {
  let component: MyComp908Component;
  let fixture: ComponentFixture<MyComp908Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp908Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
