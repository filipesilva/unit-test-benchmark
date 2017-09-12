import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp641Component } from './my-comp-641.component';

describe('MyComp641Component', () => {
  let component: MyComp641Component;
  let fixture: ComponentFixture<MyComp641Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp641Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
