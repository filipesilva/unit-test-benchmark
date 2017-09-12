import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp948Component } from './my-comp-948.component';

describe('MyComp948Component', () => {
  let component: MyComp948Component;
  let fixture: ComponentFixture<MyComp948Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp948Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
