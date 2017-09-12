import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9262Component } from './my-comp-9262.component';

describe('MyComp9262Component', () => {
  let component: MyComp9262Component;
  let fixture: ComponentFixture<MyComp9262Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9262Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
