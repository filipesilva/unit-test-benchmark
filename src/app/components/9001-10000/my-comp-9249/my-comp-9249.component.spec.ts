import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9249Component } from './my-comp-9249.component';

describe('MyComp9249Component', () => {
  let component: MyComp9249Component;
  let fixture: ComponentFixture<MyComp9249Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9249Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
