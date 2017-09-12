import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp162Component } from './my-comp-162.component';

describe('MyComp162Component', () => {
  let component: MyComp162Component;
  let fixture: ComponentFixture<MyComp162Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp162Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
