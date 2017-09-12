import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1073Component } from './my-comp-1073.component';

describe('MyComp1073Component', () => {
  let component: MyComp1073Component;
  let fixture: ComponentFixture<MyComp1073Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1073Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1073Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
