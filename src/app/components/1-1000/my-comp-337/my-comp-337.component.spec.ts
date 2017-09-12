import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp337Component } from './my-comp-337.component';

describe('MyComp337Component', () => {
  let component: MyComp337Component;
  let fixture: ComponentFixture<MyComp337Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp337Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
