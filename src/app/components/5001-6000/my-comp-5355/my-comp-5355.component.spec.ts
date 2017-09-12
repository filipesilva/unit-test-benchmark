import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5355Component } from './my-comp-5355.component';

describe('MyComp5355Component', () => {
  let component: MyComp5355Component;
  let fixture: ComponentFixture<MyComp5355Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5355Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
