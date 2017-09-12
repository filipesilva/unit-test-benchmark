import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp525Component } from './my-comp-525.component';

describe('MyComp525Component', () => {
  let component: MyComp525Component;
  let fixture: ComponentFixture<MyComp525Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp525Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
