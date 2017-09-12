import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5375Component } from './my-comp-5375.component';

describe('MyComp5375Component', () => {
  let component: MyComp5375Component;
  let fixture: ComponentFixture<MyComp5375Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5375Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
