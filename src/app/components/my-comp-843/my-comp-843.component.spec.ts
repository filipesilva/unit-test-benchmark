import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp843Component } from './my-comp-843.component';

describe('MyComp843Component', () => {
  let component: MyComp843Component;
  let fixture: ComponentFixture<MyComp843Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp843Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
