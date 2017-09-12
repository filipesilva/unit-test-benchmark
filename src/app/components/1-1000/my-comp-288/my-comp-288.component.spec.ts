import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp288Component } from './my-comp-288.component';

describe('MyComp288Component', () => {
  let component: MyComp288Component;
  let fixture: ComponentFixture<MyComp288Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp288Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
