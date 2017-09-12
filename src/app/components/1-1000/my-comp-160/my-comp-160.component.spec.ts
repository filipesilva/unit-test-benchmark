import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp160Component } from './my-comp-160.component';

describe('MyComp160Component', () => {
  let component: MyComp160Component;
  let fixture: ComponentFixture<MyComp160Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp160Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
