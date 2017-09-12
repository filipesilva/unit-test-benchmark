import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5402Component } from './my-comp-5402.component';

describe('MyComp5402Component', () => {
  let component: MyComp5402Component;
  let fixture: ComponentFixture<MyComp5402Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5402Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
