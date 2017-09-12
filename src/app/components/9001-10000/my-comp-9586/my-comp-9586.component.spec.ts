import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9586Component } from './my-comp-9586.component';

describe('MyComp9586Component', () => {
  let component: MyComp9586Component;
  let fixture: ComponentFixture<MyComp9586Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9586Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
