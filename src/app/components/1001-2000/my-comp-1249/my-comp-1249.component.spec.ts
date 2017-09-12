import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1249Component } from './my-comp-1249.component';

describe('MyComp1249Component', () => {
  let component: MyComp1249Component;
  let fixture: ComponentFixture<MyComp1249Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1249Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
