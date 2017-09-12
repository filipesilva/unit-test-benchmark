import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp469Component } from './my-comp-469.component';

describe('MyComp469Component', () => {
  let component: MyComp469Component;
  let fixture: ComponentFixture<MyComp469Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp469Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
