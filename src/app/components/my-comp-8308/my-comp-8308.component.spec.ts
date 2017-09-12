import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8308Component } from './my-comp-8308.component';

describe('MyComp8308Component', () => {
  let component: MyComp8308Component;
  let fixture: ComponentFixture<MyComp8308Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8308Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
