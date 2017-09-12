import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8351Component } from './my-comp-8351.component';

describe('MyComp8351Component', () => {
  let component: MyComp8351Component;
  let fixture: ComponentFixture<MyComp8351Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8351Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
