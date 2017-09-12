import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9006Component } from './my-comp-9006.component';

describe('MyComp9006Component', () => {
  let component: MyComp9006Component;
  let fixture: ComponentFixture<MyComp9006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
