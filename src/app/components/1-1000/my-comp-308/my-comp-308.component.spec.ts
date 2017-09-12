import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp308Component } from './my-comp-308.component';

describe('MyComp308Component', () => {
  let component: MyComp308Component;
  let fixture: ComponentFixture<MyComp308Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp308Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
