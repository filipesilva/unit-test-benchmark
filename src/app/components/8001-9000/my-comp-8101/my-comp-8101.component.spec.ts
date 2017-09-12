import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8101Component } from './my-comp-8101.component';

describe('MyComp8101Component', () => {
  let component: MyComp8101Component;
  let fixture: ComponentFixture<MyComp8101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
