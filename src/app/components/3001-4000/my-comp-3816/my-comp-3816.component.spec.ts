import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3816Component } from './my-comp-3816.component';

describe('MyComp3816Component', () => {
  let component: MyComp3816Component;
  let fixture: ComponentFixture<MyComp3816Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3816Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3816Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
