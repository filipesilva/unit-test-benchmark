import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7872Component } from './my-comp-7872.component';

describe('MyComp7872Component', () => {
  let component: MyComp7872Component;
  let fixture: ComponentFixture<MyComp7872Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7872Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7872Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
