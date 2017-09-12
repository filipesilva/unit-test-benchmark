import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp165Component } from './my-comp-165.component';

describe('MyComp165Component', () => {
  let component: MyComp165Component;
  let fixture: ComponentFixture<MyComp165Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp165Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
